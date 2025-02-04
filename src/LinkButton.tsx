interface Props {
  name: string
  logo: string | React.ReactNode
}

export const LinkButton: React.FC<Props> = ({ name, logo }) => {
  return (
    <div className="h-14 w-96 border-2 bg-slate-700 rounded-full border-slate-300 flex justify-between items-center px-1">
      <div className="rounded-full border-3 border-slate-300 w-11 h-11 grid place-content-center shrink-0">
        {logo}
      </div>
      <div className="font-bold text-slate-300 grid place-content-center text-3xl w-full">
        {name}
      </div>
    </div>
  )
}
