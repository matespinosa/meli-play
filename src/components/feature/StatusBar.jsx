import { SignalIcon, WifiIcon, BatteryIcon } from '../foundations/icons'

export default function StatusBar() {
  return (
    <div className="hidden h-[59px] w-full items-end justify-between bg-surface-elevated px-4 pb-3 lg:flex">
      <span className="font-sf text-[16px] font-semibold leading-[130%] tracking-[-0.32px] text-white">
        9:41
      </span>

      <div className="h-[37px] w-[125px] rounded-pill bg-black" aria-hidden />

      <div className="flex items-center gap-2">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  )
}
