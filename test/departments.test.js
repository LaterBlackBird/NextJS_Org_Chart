import { fireEvent, getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DepartmentRow from "../components/molecules/DepartmentRow";

describe('Department Row', () => {
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
    const { getByText } = render(<DepartmentRow department={expectedProps}/>);
    const deptName = getByText(expectedProps.name);
  
    expect(deptName).toBeVisible();
  });
});

