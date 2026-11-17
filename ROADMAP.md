# Agent & RAG portfolio roadmap

These are development ideas, not completed projects or claims for the public portfolio. The homepage lists them as planned projects with build specifications. Do not present them as completed applications or add demo/repository links until the implementation and evidence exist.

## Recommendation: three systems, not twelve disconnected demos

The twelve ideas are a useful capability map. Most become more convincing when integrated into a small number of systems that solve real problems. Library names and infrastructure alone do not demonstrate engineering judgment.

### 1. Evidence-grounded retrieval and answering

Extend a focused document QA application or the evidence workflow around PageGuide. Keep browser citation highlighting distinct from implementing a retrieval backend; the current extension is not presented as a hybrid RAG system.

Combine:

- Hybrid retrieval with keyword search and pgvector, then evaluate fusion and reranking.
- A context budget that reserves room for system instructions, tool schemas, results, and output.
- Bounded query rewriting and re-retrieval, with explicit abstention when evidence is insufficient.
- Retrieval evaluation and answer-grounding checks in CI.

Evidence to publish:

- A versioned corpus and held-out query set with labeled relevant evidence.
- Recall@k, nDCG@k, citation correctness, and grounded-answer/abstention results.
- A comparison against a vector-only baseline, including p50/p95 latency and cost per task.
- Ablations: which components improved quality, which increased latency, and which were unnecessary.

Accuracy note: PostgreSQL full-text ranking is not automatically BM25. If claiming BM25, implement it or use an appropriate search engine/extension. pgvector documents hybrid search with PostgreSQL full-text search and fusion/reranking.

### 2. A recoverable agent workflow

Use a concrete workflow such as a service request, booking process, or document-processing job. Make reliability observable before adding multiple agents.

Combine:

- Checkpointed state and recovery after a process restart.
- Typed inputs/outputs, idempotent side effects, bounded retries, and explicit failure states.
- Human approval for a meaningful state change.
- Scoped database/tool access via an MCP server if MCP fits the integration.
- Traces and CI checks for unsafe or invalid tool transitions.

Evidence to publish:

- A restart-and-resume demo and a documented state diagram.
- Fault injection for network timeouts, upstream rate limits, duplicate requests, and approval denial.
- Recovery rate, task completion rate, and how duplicate side effects are prevented.
- Permission-boundary tests, audit records, and documented data handling.

Use an MCP SDK for a working product unless protocol implementation is itself the learning objective. A hand-written JSON-RPC implementation adds maintenance and compliance work; it is not a prerequisite for credible MCP experience.

### 3. Model gateway and operational evaluation

Build this only after there is a real workload from the first two systems. It can be shared infrastructure rather than another standalone portfolio tile.

Combine:

- Routing based on measured quality, cost, and latency—not model parameter count alone.
- Tenant-scoped caching with explicit freshness, invalidation, and eligibility rules.
- Memory limits and retention rules tied to actual product requirements.
- Request tracing, failure accounting, and deployment/CI documentation.

Evidence to publish:

- A held-out routing evaluation and end-to-end task quality comparison.
- Latency, cost per successful task, cache hit rate, and cache false-hit rate.
- Tests showing that users cannot receive another user’s cached/private context.
- The cache bypass path for personalized, sensitive, or time-dependent requests.

## How the twelve ideas map

| Idea | Priority | Where it belongs |
| --- | --- | --- |
| Dynamic context assembler | High | Retrieval/answering system |
| Hybrid search + reranking | High | Retrieval system with baselines |
| GraphRAG | Conditional | Add only if relationship-heavy queries outperform the simpler baseline |
| Self-correcting RAG | High | Bounded retries and abstention in retrieval workflow |
| Durable state machine | High | Recoverable agent workflow |
| Raw MCP implementation | Optional | Learning exercise; prefer SDKs for the product |
| Three-tier memory | Conditional | Add memory only when retention/use cases justify it |
| Typed multi-agent swarm | Conditional | Typed boundaries are useful; multiple agents need evidence of benefit |
| Trajectory CI gate | High | Check invariants, allowed transitions, safety, and task outcomes |
| Security and PII proxy | High | Defense in depth across all systems |
| Semantic cache and router | Medium | Shared gateway after measuring a real workload |
| Architecture write-ups | High | One write-up accompanying each system |

## Important refinements

- Do not require one exact golden tool-call DAG when several correct trajectories exist. Test constraints, valid dependencies, permissions, outcomes, and a representative task set. Add explicit trajectory comparisons where the order is a real requirement.
- PII tokenization and prompt-injection filtering are not complete security boundaries. Enforce access restrictions in the tools and data layer, validate arguments, isolate execution where needed, and test adversarial inputs.
- TTL alone is not a memory-management strategy. Define what is stored, capacity limits, eviction, ownership, deletion, and how stale information is prevented from driving actions.
- GraphRAG, swarms, and semantic caching should earn their complexity through evaluation. A simpler system with sound evidence is a stronger portfolio item than an elaborate unmeasured architecture.
- Report real results with dataset size, configuration, evaluation date, and limitations. Do not copy benchmark claims from unrelated systems.

## Primary references

- [pgvector: hybrid search](https://github.com/pgvector/pgvector#hybrid-search)
- [Temporal: activity definitions and idempotency](https://docs.temporal.io/activity-definition)
- [Temporal: retry policies](https://docs.temporal.io/encyclopedia/retry-policies)
- [MCP security best practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)

## Suggested order

1. Ship the current portfolio and make its existing projects easy to run and review.
2. Choose one document QA use case and build the retrieval baseline and evaluation set.
3. Add reranking, context budgeting, and answer checks only with measured comparisons.
4. Build one recoverable workflow and demonstrate failures and recovery.
5. Publish two case studies with architecture, demos, reproducible commands, and evaluation results.
6. Add routing, memory, graph retrieval, or multiple agents only when a documented need emerges.
