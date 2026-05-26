import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Circle,
  Flame,
  BookOpen,
  Code2,
  Zap,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import {
  dsaSheetData,
  getTotalProblemCount,
  getStepProblemCount,
  type Step,
  type Problem,
} from "./data/dsaSheetData";

// ─── Badge colours by difficulty ──────────────────────────
const diffColor: Record<string, string> = {
  Easy: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Medium: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  Hard: "bg-red-500/15 text-red-400 border border-red-500/30",
};

// ─── Platform badge colours ──────────────────────────────
const platformStyles: Record<string, string> = {
  leetcode: "bg-[#FFA116]/15 text-[#FFA116] border border-[#FFA116]/30",
  gfg: "bg-[#2F8D46]/15 text-[#2F8D46] border border-[#2F8D46]/30",
  codingninjas: "bg-[#6C63FF]/15 text-[#6C63FF] border border-[#6C63FF]/30",
};

// ─── Problem Modal ───────────────────────────────────────
function ProblemModal({
  problem,
  onClose,
  solved,
  onToggle,
}: {
  problem: Problem;
  onClose: () => void;
  solved: boolean;
  onToggle: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const links = [
    { label: "LeetCode", url: problem.leetcode, key: "leetcode" as const },
    { label: "GeeksforGeeks", url: problem.gfg, key: "gfg" as const },
    {
      label: "Coding Ninjas",
      url: problem.codingninjas,
      key: "codingninjas" as const,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-gray-700/60 bg-gray-900 p-6 shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-white pr-8 mb-2">
          {problem.name}
        </h2>

        {/* Difficulty */}
        <span
          className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold mb-5 ${diffColor[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>

        {/* Solved toggle */}
        <button
          onClick={onToggle}
          className={`w-full mb-5 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
            solved
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500"
          }`}
        >
          {solved ? (
            <>
              <CheckCircle2 size={18} /> Solved ✓
            </>
          ) : (
            <>
              <Circle size={18} /> Mark as Solved
            </>
          )}
        </button>

        {/* Practice Links */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
            Practice Links
          </p>
          {links.map(
            (link) =>
              link.url && (
                <a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition hover:scale-[1.02] ${platformStyles[link.key]}`}
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={16} />
                    {link.label}
                  </span>
                  <ExternalLink size={14} />
                </a>
              )
          )}
          {!links.some((l) => l.url) && (
            <p className="text-gray-500 text-sm italic">
              No practice links available for this problem.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0]));
  const [selectedProblem, setSelectedProblem] = useState<{
    problem: Problem;
    stepIdx: number;
    subIdx: number;
    probIdx: number;
  } | null>(null);

  // Load solved state from localStorage
  const [solvedMap, setSolvedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("tanyboy-solved");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("tanyboy-solved", JSON.stringify(solvedMap));
  }, [solvedMap]);

  const totalProblems = useMemo(() => getTotalProblemCount(), []);

  const solvedCount = useMemo(() => {
    let count = 0;
    dsaSheetData.forEach((step, si) => {
      step.subsections.forEach((sub, sbi) => {
        sub.problems.forEach((_, pi) => {
          if (solvedMap[`${si}-${sbi}-${pi}`]) count++;
        });
      });
    });
    return count;
  }, [solvedMap]);

  const toggleSolved = useCallback(
    (si: number, sbi: number, pi: number) => {
      const key = `${si}-${sbi}-${pi}`;
      setSolvedMap((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  const toggleExpand = (idx: number) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const selectStep = (idx: number) => {
    setActiveStepIndex(idx);
    if (!expandedSteps.has(idx)) {
      setExpandedSteps((prev) => new Set(prev).add(idx));
    }
    setSidebarOpen(false);
  };

  const activeStep = dsaSheetData[activeStepIndex];

  // Step-wise solved count
  const getStepSolvedCount = (step: Step, stepIdx: number) => {
    let count = 0;
    step.subsections.forEach((_, sbi) => {
      _.problems.forEach((_, pi) => {
        if (solvedMap[`${stepIdx}-${sbi}-${pi}`]) count++;
      });
    });
    return count;
  };

  const progressPct = totalProblems > 0 ? ((solvedCount / totalProblems) * 100).toFixed(1) : "0";

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* ─── Overlay for mobile sidebar ─── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ─── Sidebar ─── */}
      <aside
        className={`fixed z-40 lg:static inset-y-0 left-0 flex flex-col w-72 bg-gray-900/95 backdrop-blur border-r border-gray-800 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-black tracking-tight text-white">
              <span className="text-cyan-400">TANYBOY</span>'S SHEET
            </h1>
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
            Striver's A2Z DSA Course
          </p>

          {/* Original link */}
          <a
            href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <ArrowUpRight size={12} />
            View Original Sheet
          </a>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-[11px] text-gray-400 mb-1">
              <span>Progress</span>
              <span className="font-mono">
                {solvedCount}/{totalProblems} ({progressPct}%)
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Steps List */}
        <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {dsaSheetData.map((step, idx) => {
            const stepCount = getStepProblemCount(step);
            const stepSolved = getStepSolvedCount(step, idx);
            const isActive = activeStepIndex === idx;

            return (
              <div key={idx}>
                <button
                  onClick={() => {
                    selectStep(idx);
                    toggleExpand(idx);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-3 text-left transition-all ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-gray-300 hover:bg-gray-800/60 border-l-2 border-transparent"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{step.title}</p>
                    <p className="text-[10px] text-gray-500">
                      {stepSolved}/{stepCount} solved
                    </p>
                  </div>
                  {stepSolved === stepCount && stepCount > 0 ? (
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 flex-shrink-0"
                    />
                  ) : (
                    <ChevronRight
                      size={14}
                      className={`flex-shrink-0 text-gray-600 transition-transform ${
                        expandedSteps.has(idx) ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Subsections in sidebar */}
                {isActive && expandedSteps.has(idx) && (
                  <div className="pl-14 pr-4 pb-2 space-y-1">
                    {step.subsections.map((sub, subIdx) => (
                      <button
                        key={subIdx}
                        className="w-full text-left text-xs text-gray-500 hover:text-gray-300 py-1 transition"
                        onClick={() => {
                          const el = document.getElementById(
                            `subsection-${idx}-${subIdx}`
                          );
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {sub.title}
                        <span className="ml-1 text-gray-600">
                          ({sub.problems.length})
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 text-center">
          <p className="text-[10px] text-gray-600">
            Tanyboy's Version • {totalProblems} Problems
          </p>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur border-b border-gray-800">
          <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
            <button
              className="lg:hidden text-gray-400 hover:text-white transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-black text-white">
                  Striver's A2Z DSA Course/Sheet
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-3 py-0.5 text-[11px] font-bold text-cyan-400">
                  <Flame size={12} />
                  TANYBOY'S VERSION
                </span>
              </div>
              <div className="flex items-center gap-3 mt-0.5">
                <p className="text-sm text-gray-400">
                  {totalProblems} Problems
                </p>
                <span className="text-gray-700">•</span>
                <p className="text-sm text-gray-400">
                  {solvedCount} Solved ({progressPct}%)
                </p>
                <span className="hidden sm:inline text-gray-700">•</span>
                <a
                  href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  <BookOpen size={14} />
                  Original Sheet
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-4">
              <div className="text-center">
                <p className="text-lg font-black text-emerald-400">
                  {solvedCount}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Solved
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-cyan-400">
                  {totalProblems - solvedCount}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Remaining
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-amber-400">
                  {progressPct}%
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Complete
                </p>
              </div>
            </div>
          </div>

          {/* Tanyboy mobile badge */}
          <div className="sm:hidden px-4 pb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-3 py-0.5 text-[11px] font-bold text-cyan-400">
              <Flame size={12} />
              TANYBOY'S VERSION
            </span>
          </div>
        </header>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Step Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 font-black text-lg">
                {activeStep.step}
              </span>
              <div>
                <h2 className="text-2xl font-black text-white">
                  {activeStep.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {getStepSolvedCount(activeStep, activeStepIndex)}/
                  {getStepProblemCount(activeStep)} problems solved
                </p>
              </div>
            </div>
            {/* Step progress bar */}
            <div className="mt-3 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                style={{
                  width: `${
                    getStepProblemCount(activeStep) > 0
                      ? (getStepSolvedCount(activeStep, activeStepIndex) /
                          getStepProblemCount(activeStep)) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Subsections */}
          {activeStep.subsections.map((subsection, subIdx) => (
            <div
              key={subIdx}
              id={`subsection-${activeStepIndex}-${subIdx}`}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} className="text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  {subsection.title}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-800 rounded-full px-2 py-0.5">
                  {subsection.problems.length} problems
                </span>
              </div>

              <div className="grid gap-2">
                {subsection.problems.map((problem, probIdx) => {
                  const key = `${activeStepIndex}-${subIdx}-${probIdx}`;
                  const isSolved = solvedMap[key] || false;

                  return (
                    <button
                      key={probIdx}
                      onClick={() =>
                        setSelectedProblem({
                          problem,
                          stepIdx: activeStepIndex,
                          subIdx,
                          probIdx,
                        })
                      }
                      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                        isSolved
                          ? "bg-emerald-500/8 border border-emerald-500/20 hover:bg-emerald-500/15"
                          : "bg-gray-900/50 border border-gray-800 hover:bg-gray-800/70 hover:border-gray-700"
                      }`}
                    >
                      {/* Solved indicator */}
                      <div
                        className="flex-shrink-0 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolved(activeStepIndex, subIdx, probIdx);
                        }}
                      >
                        {isSolved ? (
                          <CheckCircle2
                            size={20}
                            className="text-emerald-400"
                          />
                        ) : (
                          <Circle
                            size={20}
                            className="text-gray-600 group-hover:text-gray-400 transition"
                          />
                        )}
                      </div>

                      {/* Problem number */}
                      <span className="flex-shrink-0 w-7 text-xs font-mono text-gray-500">
                        {probIdx + 1}.
                      </span>

                      {/* Problem name */}
                      <span
                        className={`flex-1 text-sm font-medium truncate ${
                          isSolved
                            ? "text-emerald-300 line-through"
                            : "text-gray-200"
                        }`}
                      >
                        {problem.name}
                      </span>

                      {/* Difficulty badge */}
                      <span
                        className={`hidden sm:inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold ${diffColor[problem.difficulty]}`}
                      >
                        {problem.difficulty}
                      </span>

                      {/* Available platforms */}
                      <div className="hidden sm:flex items-center gap-1">
                        {problem.leetcode && (
                          <span className="text-[10px] font-semibold text-[#FFA116] bg-[#FFA116]/10 rounded px-1.5 py-0.5">
                            LC
                          </span>
                        )}
                        {problem.gfg && (
                          <span className="text-[10px] font-semibold text-[#2F8D46] bg-[#2F8D46]/10 rounded px-1.5 py-0.5">
                            GFG
                          </span>
                        )}
                        {problem.codingninjas && (
                          <span className="text-[10px] font-semibold text-[#6C63FF] bg-[#6C63FF]/10 rounded px-1.5 py-0.5">
                            CN
                          </span>
                        )}
                      </div>

                      <ChevronDown
                        size={14}
                        className="flex-shrink-0 text-gray-600 group-hover:text-gray-400 transition -rotate-90"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="mt-12 mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 border border-gray-800 px-6 py-4">
              <Trophy size={20} className="text-amber-400" />
              <span className="text-sm text-gray-300">
                {solvedCount === 0
                  ? "Start solving to track your progress!"
                  : solvedCount === totalProblems
                  ? "🎉 All problems solved! Amazing!"
                  : `${totalProblems - solvedCount} more to go. Keep going!`}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Modal ─── */}
      {selectedProblem && (
        <ProblemModal
          problem={selectedProblem.problem}
          solved={
            solvedMap[
              `${selectedProblem.stepIdx}-${selectedProblem.subIdx}-${selectedProblem.probIdx}`
            ] || false
          }
          onToggle={() =>
            toggleSolved(
              selectedProblem.stepIdx,
              selectedProblem.subIdx,
              selectedProblem.probIdx
            )
          }
          onClose={() => setSelectedProblem(null)}
        />
      )}
    </div>
  );
}
