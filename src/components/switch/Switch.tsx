import { FunctionComponent, useContext } from "react";
import styles from "./Switch.module.scss";
import LayoutContext from "../../utils/context/LayoutContext";

interface SwitchProps {
  onChange: (checked: boolean) => void;
  text?: string | number | JSX.Element;
  responsive?: boolean;
  size?: "small" | "default" | "large";
  name?: string;
  checked: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
}

const Switch: FunctionComponent<SwitchProps> = props => {
  const {
    onChange,
    text,
    responsive,
    size,
    name,
    checked,
    defaultChecked,
    disabled,
    id
  } = props;

  const { isDark } = useContext(LayoutContext);

  return (
    <label
      className={[
        styles.wrapper,
        responsive && styles.responsive,
        disabled && styles.disabled,
        styles[size || "default"]
      ].join(" ")}
    >
      <input
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        className={styles.switch}
        onChange={e => onChange(e.target.checked)}
        type="checkbox"
        disabled={disabled}
        id={id}
      />
      {text && <span className={styles.text}>{text}</span>}
      <span
        className={[
          styles["switch-wrapper"],
          isDark ? styles.dark : styles.light
        ].join(" ")}
      >
        <span className={styles["switch-icon"]} />
      </span>
    </label>
  );
};

export default Switch;
