interface Props {
  children: React.ReactNode
}

function DownloadButton({ children }: Props) {
  return (
    <a
      className={`bg-pink-1 rounded-tl-md rounded-br-md font-semibold py-2 px-4`}
      href="https://drive.google.com/drive/folders/14hXu4Bdh_pXXt-qsH6WMbTTY_OxazOGm"
    >
      {children}
    </a>
  )
}

export default DownloadButton
