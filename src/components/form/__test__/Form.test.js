/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import Form from "../Form";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import "@testing-library/jest-dom";

describe("test form", () => {
  test("call onSubmit func when form is valid", async () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), {
      target: { value: "asd" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your Email/i), {
      target: { value: "asd@123.com" },
    });
    fireEvent.change(screen.getByTestId("input-pass"), {
      target: { value: "Taquanghuy@123" },
    });

    fireEvent.change(
      screen.getByPlaceholderText(/Enter your Password again/i),
      {
        target: { value: "Taquanghuy@123" },
      }
    );
    fireEvent.change(screen.getByPlaceholderText(/Enter your Phone Number/i), {
      target: { value: "0123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your Address/i), {
      target: { value: "asd" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your Zip Code/i), {
      target: { value: "1111" },
    });
    fireEvent.submit(screen.getByTestId("btn-submit"));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
