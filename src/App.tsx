import { useState, useEffect, useCallback } from 'react';
import { Search, ExternalLink, BookOpen, Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import QuestionModal from './components/QuestionModal';
import {
  dsaSheetData,
  getTotalProblems,
  Step,
  Problem,
} from './data/dsaSheetData';

export default function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeSubStepIndex, setActiveSubStepIndex] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0]));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const totalProblems = getTotalProblems();

  // Get current step and sub-step
  const currentStep: Step = dsaSheetData[activeStepIndex];
  const currentSubStep = currentStep?.subSteps[activeSubStepIndex];
  const currentProblems = currentSubStep?.problems || [];

  // Filter problems based on search
  const filteredProblems = searchQuery
    ? currentProblems.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentProblems;

  const toggleStep = useCallback((stepIndex: number) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepIndex)) {
        next.delete(stepIndex);
      } else {
        next.add(stepIndex);
      }
      return next;
    });
  }, []);

  const handleSelectSubStep = useCallback(
    (stepIndex: number, subStepIndex: number) => {
      setActiveStepIndex(stepIndex);
      setActiveSubStepIndex(subStepIndex);
      setExpandedSteps((prev) => new Set(prev).add(stepIndex));
      setMobileSidebarOpen(false);
    },
    []
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProblem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Search across all problems globally when search query exists
  const globalSearchResults = searchQuery
    ? dsaSheetData.flatMap((step, si) =>
        step.subSteps.flatMap((sub, ssi) =>
          sub.problems
            .filter((p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((p) => ({ ...p, stepIndex: si, subStepIndex: ssi, stepTitle: step.title, subStepTitle: sub.title }))
        )
      )
    : [];

  return (
    <div className="flex h-screen bg-[#0d1117] text-white font-sans">
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar
          steps={dsaSheetData}
          activeStepIndex={activeStepIndex}
          activeSubStepIndex={activeSubStepIndex}
          onSelectSubStep={handleSelectSubStep}
          expandedSteps={expandedSteps}
          toggleStep={toggleStep}
          searchQuery=""
        />
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 lg:hidden transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          steps={dsaSheetData}
          activeStepIndex={activeStepIndex}
          activeSubStepIndex={activeSubStepIndex}
          onSelectSubStep={handleSelectSubStep}
          expandedSteps={expandedSteps}
          toggleStep={toggleStep}
          searchQuery=""
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center gap-4 border-b border-gray-800 bg-[#0d1117] px-4 py-3 lg:px-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 lg:hidden"
          >
            {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex flex-1 items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                <BookOpen size={16} className="text-white" />
                <div className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0d1117]" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-sm font-semibold text-gray-200 hover:text-blue-400 transition-colors sm:text-base"
                >
                  <span className="truncate">Striver's A2Z DSA Course/Sheet</span>
                  <ExternalLink size={13} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </a>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 border border-violet-500/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-violet-300 shrink-0">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Tanyboy's Version
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0 text-[11px] font-medium text-blue-400 border border-blue-500/20">
                  {totalProblems} Problems
                </span>
                <span className="hidden sm:inline text-[11px] text-gray-600">•</span>
                <span className="hidden sm:inline text-[11px] text-gray-500">No Database • No Login • Just Practice</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-48 sm:w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#161b22] py-2 pl-9 pr-3 text-sm text-gray-200 placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-gray-500 hover:text-gray-300"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-[#0d1117] px-4 py-6 lg:px-8">
          {/* Search Results Mode */}
          {searchQuery ? (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Search Results
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Found {globalSearchResults.length} problem(s) matching "{searchQuery}"
                </p>
              </div>

              {globalSearchResults.length > 0 ? (
                <div className="space-y-2">
                  {globalSearchResults.map((problem) => (
                    <div
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem)}
                      className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#161b22] px-4 py-3 transition-all hover:border-gray-600 hover:bg-[#1c2333] cursor-pointer"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-xs font-bold text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        {problem.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-200 truncate group-hover:text-white">
                          {problem.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Step {dsaSheetData[problem.stepIndex].stepNumber} &gt; {problem.stepTitle} &gt; {problem.subStepTitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {problem.difficulty && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              problem.difficulty === 'Easy'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : problem.difficulty === 'Medium'
                                ? 'bg-yellow-500/10 text-yellow-400'
                                : 'bg-red-500/10 text-red-400'
                            }`}
                          >
                            {problem.difficulty}
                          </span>
                        )}
                        {problem.leetcode && (
                          <a
                            href={problem.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-700 hover:text-amber-400"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                  <Search size={48} className="mb-4 opacity-30" />
                  <p className="text-lg font-medium">No problems found</p>
                  <p className="text-sm">Try a different search term</p>
                </div>
              )}
            </div>
          ) : (
            /* Normal Mode - Current Section */
            <div>
              {/* Section Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span>Step {currentStep.stepNumber}</span>
                  <span>›</span>
                  <span className="text-gray-400">{currentStep.title}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {currentSubStep?.title}
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  {filteredProblems.length} problem{filteredProblems.length !== 1 ? 's' : ''} in this section
                </p>
              </div>

              {/* Problems List */}
              {filteredProblems.length > 0 ? (
                <div className="space-y-2">
                  {/* Table Header */}
                  <div className="hidden sm:flex items-center gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <div className="w-10 text-center">#</div>
                    <div className="flex-1">Problem Name</div>
                    <div className="w-20 text-center">Difficulty</div>
                    <div className="w-28 text-center">Links</div>
                  </div>

                  {filteredProblems.map((problem, index) => (
                    <div
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem)}
                      className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-800/50 bg-[#161b22] px-3 sm:px-4 py-3 transition-all hover:border-gray-600 hover:bg-[#1c2333] cursor-pointer"
                    >
                      {/* Problem Number */}
                      <div className="flex h-8 w-8 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-gray-800/80 text-xs font-bold text-gray-500 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        {index + 1}
                      </div>

                      {/* Problem Name */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-200 group-hover:text-white truncate transition-colors">
                          {problem.name}
                        </h3>
                      </div>

                      {/* Difficulty */}
                      <div className="shrink-0">
                        {problem.difficulty ? (
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              problem.difficulty === 'Easy'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : problem.difficulty === 'Medium'
                                ? 'bg-yellow-500/10 text-yellow-400'
                                : 'bg-red-500/10 text-red-400'
                            }`}
                          >
                            {problem.difficulty}
                          </span>
                        ) : (
                          <span className="inline-block rounded-full bg-gray-700/50 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                            Theory
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {problem.leetcode && (
                          <a
                            href={problem.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Solve on LeetCode"
                            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-amber-500/20 hover:text-amber-400"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-1.349 1.337-1.349 3.529 0 4.879l4.38 4.363c1.35 1.35 3.529 1.35 4.878 0l2.698-2.607c.514-.515.496-1.366-.039-1.902-.535-.535-1.387-.552-1.901-.037z"/>
                            </svg>
                          </a>
                        )}
                        {problem.gfg && (
                          <a
                            href={problem.gfg}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Solve on GeeksforGeeks"
                            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-green-500/20 hover:text-green-400"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                        {!problem.leetcode && !problem.gfg && (
                          <span className="text-xs text-gray-600 px-2">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                  <BookOpen size={48} className="mb-4 opacity-30" />
                  <p className="text-lg font-medium">No problems in this section</p>
                  <p className="text-sm">Select a different section from the sidebar</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Question Modal */}
      {selectedProblem && (
        <QuestionModal
          problem={selectedProblem}
          onClose={() => setSelectedProblem(null)}
        />
      )}
    </div>
  );
}
