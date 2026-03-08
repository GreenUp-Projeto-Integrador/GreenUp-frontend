import svgPaths from "./svg-khmxef6mc7";

export default function PopUpLogin() {
  return (
    <div className="relative size-full" data-name="Pop-up login">
      <div className="absolute bg-[#fafbfa] inset-0 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="absolute inset-[37.5%_27.04%_37.5%_6.29%]" data-name="h2">
        <p className="absolute font-['Poppins:Medium',sans-serif] inset-0 leading-[normal] not-italic text-[15px] text-black whitespace-nowrap">Login realizado com sucesso</p>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[30/30] left-[77.99%] right-[6.29%] top-1/2" data-name="success icon component">
        <div className="absolute inset-[3.02%_25.99%_90.16%_64.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.77042 3.40654">
            <path d={svgPaths.pa14b5f0} fill="var(--fill-0, #6F9A7C)" id="Ellipse 9" />
          </svg>
        </div>
        <div className="absolute inset-[33.49%_26.01%_35.51%_28.9%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p1c4be0} id="Vector" opacity="0" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}