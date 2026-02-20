def build_prompt(query, context):

    prompt = f"""
    Use ONLY the provided academic context.

    Context:
    {context}

    Question:
    {query}
    """

    return prompt
