// import { useSwitch } from "@/hook/useSwitch";
import { useSwitch } from "@/hook/useSwitchReducer";
import "./switch.css";

interface Props {
  dafaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  id?: string;
  size?: "sm" | "md" | "lg";
}

function Switcher({ size = "md", ...restProps }: Props) {
  // const {checked,a11y,disabled} = useSwitch(restProps);
  //   const checked = false;
  //   const disabled = false;
  const { checked, disabled, a11yProps, setChecked } = useSwitch(restProps);
  return (
    <>
      <button
        type="button"
        {...a11yProps}
        className={[
          "switch",
          `switch--${size}`,
          checked ? "is-on" : "is-off",
          disabled ? "is-disabled" : "",
        ].join(" ")}
      >
        <span className="switch__track" />
        <span className="switch__thumb" />
      </button>
      <button type="button" onClick={() => setChecked(true)}></button>
    </>
  );
}
export default Switcher;
