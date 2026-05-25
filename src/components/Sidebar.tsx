import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { Step, getStepProblemCount } from '../data/dsaSheetData';

interface SidebarProps {
  steps: Step[];
  activeStepIndex: number;
  activeSubStepIndex: number;
  onSelectSubStep: (stepIndex: number, subStepIndex: number) => void;
  expandedSteps: Set<number>;
  toggleStep: (stepIndex: number) => void;
  searchQuery: string;
}

export default function Sidebar({
  steps,
  activeStepIndex,
  activeSubStepIndex,
  onSelectSubStep,
  expandedSteps,
  toggleStep,
  searchQuery,
}: SidebarProps) {
  // Filter steps/substeps based on search query
  const filteredSteps = steps
    .map((step, stepIdx) => {
      const filteredSubSteps = step.subSteps
        .map((subStep, subIdx) => {
          if (!searchQuery) return { subStep, subIdx };
          const hasMatchingProblem = subStep.problems.some((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (hasMatchingProblem) return { subStep, subIdx };
          return null;
        })
        .filter(Boolean) as { subStep: typeof step.subSteps[0]; subIdx: number }[];

      if (!searchQuery || filteredSubSteps.length > 0) {
        return { step, stepIdx, filteredSubSteps };
      }
      return null;
    })
    .filter(Boolean) as {
    step: Step;
    stepIdx: number;
    filteredSubSteps: { subStep: typeof steps[0]['subSteps'][0]; subIdx: number }[];
  }[];

  return (
    <aside className="h-full w-72 min-w-[288px] overflow-y-auto border-r border-gray-800 bg-[#0d1117]">
      {/* Sheet Title */}
      <div className="sticky top-0 z-10 border-b border-gray-800 bg-[#0d1117] px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-md shadow-blue-500/20">
            <BookOpen size={14} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white leading-tight">Striver's A2Z DSA Sheet</h1>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-violet-400 mt-0.5">
              <span className="inline-block h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
              Tanyboy's Version
            </span>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <nav className="p-2">
        {filteredSteps.map(({ step, stepIdx, filteredSubSteps }) => {
          const isExpanded = expandedSteps.has(stepIdx);
          const problemCount = getStepProblemCount(step);

          return (
            <div key={stepIdx} className="mb-1">
              {/* Step Header */}
              <button
                onClick={() => toggleStep(stepIdx)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  stepIdx === activeStepIndex
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-xs font-bold text-blue-400">
                    {step.stepNumber}
                  </span>
                  <span className="truncate">{step.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400">
                    {problemCount}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </div>
              </button>

              {/* Sub-steps */}
              {isExpanded && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-800 pl-3">
                  {filteredSubSteps.map(({ subStep, subIdx }) => {
                    const isActive =
                      stepIdx === activeStepIndex && subIdx === activeSubStepIndex;

                    return (
                      <button
                        key={subIdx}
                        onClick={() => onSelectSubStep(stepIdx, subIdx)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                          isActive
                            ? 'bg-blue-500/20 text-blue-300 font-medium'
                            : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-200'
                        }`}
                      >
                        <span className="truncate">{subStep.title}</span>
                        <span className="ml-2 shrink-0 text-gray-500">
                          {subStep.problems.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
