import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DepartmentRow from "../components/molecules/DepartmentRow";

describe('Departments List', () => {
  let expectedProps;
  
  beforeEach(() => {
    expectedProps = {
      "id": 10,
      "isActive": "true",
      "name": "Test 1",
      "dateCreated": "2022-05-18T19:35:54.731Z",
      "dateUpdated": "2022-05-18T19:42:46.358Z"
    }
  });
  
  test('should show the department name on a row', () => {
    const table = document.createElement('tbody');
    const { container } = render(<DepartmentRow department={expectedProps}/>, {
      container: document.body.appendChild(table),
    })
    const deptName = screen.getByText(expectedProps.name);
  
    expect(deptName).toBeVisible();
  });

  test('should have edit and delete options', () => {
    const table = document.createElement('tbody');
    const { container } = render(<DepartmentRow department={expectedProps}/>, {
      container: document.body.appendChild(table),
    })
    const editLink = screen.getByRole('link', { name: /edit/i});
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    expect(editLink).toBeVisible();
    expect(deleteButton).toBeVisible();
  });

});

