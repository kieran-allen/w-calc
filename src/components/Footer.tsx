import clsx from 'clsx'

export function Footer() {
  return (
    <footer className={clsx('mt-12')}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('link')}
        href="https://github.com/kieran-allen/w-calc"
      >
        GitHub
      </a>
    </footer>
  )
}
