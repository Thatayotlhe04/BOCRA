const knowledgeBase: Array<{ topic: RegExp; answer: string }> = [
  {
    topic: /(file|submit).*(complaint)|complaint.*(file|submit)/i,
    answer:
      "To file a complaint, go to Complaints, select your provider, describe the issue, and submit. Save your tracking ID (CMP-YYYY-XXXX) to check progress later.",
  },
  {
    topic: /(track|status).*(complaint)|complaint.*(track|status)/i,
    answer:
      "Use the complaint tracking page and enter your exact tracking ID. You will see the latest status and timeline updates.",
  },
  {
    topic: /(contact|help|support)/i,
    answer:
      "For urgent service issues, contact your provider first, then escalate to BOCRA through the complaints portal if unresolved.",
  },
];

export function getAssistantResponse(message: string) {
  const match = knowledgeBase.find((item) => item.topic.test(message));
  return (
    match?.answer ||
    "I can help with filing complaints, tracking complaint IDs, and BOCRA service guidance. Try asking: 'How do I file a complaint?'"
  );
}
