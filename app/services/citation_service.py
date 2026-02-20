def extract_citations(docs):
    citations = []
    for d in docs:
        citations.append({"source": d})
    return citations
