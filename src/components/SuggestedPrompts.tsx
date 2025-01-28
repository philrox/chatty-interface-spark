const prompts = [
  "How can we better integrate customer feedback?",
  "What are the latest technological innovations in the industry?",
  "How can we optimize our processes for efficiency?",
  "What strategies should we use for market expansion?"
];

const SuggestedPrompts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {prompts.map((prompt, index) => (
        <div key={index} className="prompt-card">
          <p className="text-sm">{prompt}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestedPrompts;