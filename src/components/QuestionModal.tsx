import { X, ExternalLink, Play } from 'lucide-react';
import { Problem } from '../data/dsaSheetData';

interface QuestionModalProps {
  problem: Problem;
  onClose: () => void;
}

export default function QuestionModal({ problem, onClose }: QuestionModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-lg rounded-2xl border border-gray-700 bg-[#1a1a2e] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Problem Title */}
        <h2 className="mb-4 pr-8 text-xl font-bold text-white leading-tight">
          {problem.name}
        </h2>

        {/* Difficulty Badge */}
        {problem.difficulty && (
          <div className="mb-5">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                problem.difficulty === 'Easy'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : problem.difficulty === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}
            >
              {problem.difficulty}
            </span>
          </div>
        )}

        {/* Problem Info */}
        <div className="mb-5 rounded-xl bg-[#0f0f23] p-4 border border-gray-800">
          <h3 className="mb-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Problem Statement
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Solve the <span className="text-white font-medium">{problem.name}</span> problem.
            This is a{' '}
            <span className={
              problem.difficulty === 'Easy' ? 'text-emerald-400' :
              problem.difficulty === 'Medium' ? 'text-yellow-400' :
              problem.difficulty === 'Hard' ? 'text-red-400' : 'text-gray-300'
            }>
              {problem.difficulty || 'Practice'}
            </span>{' '}
            level problem from Striver's A2Z DSA Sheet. Click on the platform links below to solve it.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Practice On
          </h3>

          <div className="flex flex-wrap gap-3">
            {/* LeetCode Link */}
            {problem.leetcode && (
              <a
                href={problem.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-medium text-amber-400 transition-all hover:bg-amber-500/20 hover:border-amber-500/50 hover:scale-[1.02]"
              >
                <ExternalLink size={16} />
                LeetCode
              </a>
            )}

            {/* GFG Link */}
            {problem.gfg && (
              <a
                href={problem.gfg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-400 transition-all hover:bg-green-500/20 hover:border-green-500/50 hover:scale-[1.02]"
              >
                <ExternalLink size={16} />
                GeeksforGeeks
              </a>
            )}
          </div>

          {/* YouTube Solution Link */}
          {problem.youtube && (
            <div className="pt-2">
              <h3 className="mb-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Video Solution
              </h3>
              <a
                href={problem.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500/20 hover:border-red-500/50 hover:scale-[1.02]"
              >
                <Play size={16} />
                Watch on YouTube
              </a>
            </div>
          )}

          {/* No Links Available */}
          {!problem.leetcode && !problem.gfg && !problem.youtube && (
            <p className="text-sm text-gray-500 italic">
              No external links available for this topic. Search on YouTube or Google for tutorials.
            </p>
          )}
        </div>

        {/* Footer hint */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Click outside or press the × button to close
          </p>
        </div>
      </div>
    </div>
  );
}
