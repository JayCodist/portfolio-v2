import { fireEvent, render, screen } from "@testing-library/react";
import Switch from "./Switch";

jest.mock("@reach/router", () => ({
  navigate: jest.fn(),
  useNavigate: () => jest.fn()
}));

test("Switch works when unchecked", () => {
  const onChange = jest.fn();
  render(<Switch checked={false} onChange={onChange} text="Switchy Text" />);

  const switchElement = screen.getByText("Switchy Text");
  expect(switchElement).toBeVisible();
  const innerInput =
    switchElement.parentElement?.getElementsByTagName("input")[0];
  expect(innerInput).toBeInTheDocument();
  expect(innerInput).not.toBeChecked();
});

test("Switch works when checked", () => {
  const onChange = jest.fn();
  render(<Switch checked onChange={onChange} text="Switchy Text" />);

  const switchElement = screen.getByText("Switchy Text");
  const innerInput =
    switchElement.parentElement?.getElementsByTagName("input")[0];
  expect(innerInput).toBeChecked();
});

test("Switch toggles on click", () => {
  const onChange = jest.fn();
  render(<Switch checked={false} onChange={onChange} text="Switchy Text" />);

  const switchElement = screen.getByText("Switchy Text");
  fireEvent.click(switchElement);
  expect(onChange).toBeCalledWith(true);
});
