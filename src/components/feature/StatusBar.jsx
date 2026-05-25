import { SignalIcon, WifiIcon, BatteryIcon } from '../foundations/icons'

export default function StatusBar() {
  return (
    <div className="flex h-[59px] w-full items-end justify-center bg-surface-elevated">
      <div className="flex flex-1 items-center justify-center pb-[3px] pl-[10px]">
        <span className="font-sf text-[16px] font-semibold leading-[130%] tracking-[-0.32px] text-white">
          9:41
        </span>
      </div>

      <div className="h-[37px] w-[125px] rounded-pill bg-black" aria-hidden />

      <div className="flex flex-1 items-center justify-center pr-[11px]">
        <div className="flex items-start gap-2">
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>
    </div>
  )
}
