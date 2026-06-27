import React from 'react'

interface LanguageBadgeProps {
  language: string | null
}

export function LanguageBadge({ language }: LanguageBadgeProps) {
  if (!language) {
    return null
  }

  let bgClass = 'bg-zinc-500'

  if (language === 'TypeScript') {
    bgClass = 'bg-blue-500'
  } else if (language === 'JavaScript') {
    bgClass = 'bg-yellow-400'
  }

  return (
    <span
      className={`${bgClass} text-white rounded-full px-2 py-0.5 text-xs font-medium`}
    >
      {language}
    </span>
  )
}
