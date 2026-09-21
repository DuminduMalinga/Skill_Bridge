const STEPS = ["Degree Details", "Skills & Proficiency", "Past Projects"];

const STEP_WIDTHS = ["w-1/3", "w-2/3", "w-full"];

export default function OnboardingProgress({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex flex-col gap-space-sm mb-space-xl">
      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
        {STEPS.map((label, i) => {
          const stepNumber = i + 1;
          const isActive = stepNumber === step;
          const isPast = stepNumber < step;
          return (
            <div
              key={label}
              className={`items-center gap-space-xs ${
                isActive ? "flex text-primary font-semibold" : "hidden sm:flex opacity-60"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center font-caption text-caption ${
                  isActive || isPast ? "bg-primary text-on-primary" : "bg-surface-container-highest text-on-surface-variant"
                }`}
              >
                {stepNumber}
              </span>
              <span>{label}</span>
            </div>
          );
        })}
        <span className="text-caption font-caption uppercase tracking-wider text-outline">Step {step} of 3</span>
      </div>
      <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div className={`h-full bg-primary-container rounded-full transition-all duration-500 ease-out ${STEP_WIDTHS[step - 1]}`} />
      </div>
    </div>
  );
}
