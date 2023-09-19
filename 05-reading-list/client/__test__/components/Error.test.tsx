import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Error from "../../src/components/Error";

describe("<Error />", () => {
  test("should show the error title", () => {
    const title = "Mi titulo de error";

    render(<Error title={title} />);

    const errorText = screen.getByText(
      `No se encontraron resultados de "${title}"`
    );

    expect(errorText).toBeDefined();
  });
});
