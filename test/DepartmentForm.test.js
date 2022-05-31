import { render, screen, fireEvent, act } from "./test-utils";
import "@testing-library/jest-dom";
import DepartmentForm from "../components/organisms/DepartmentForm";

describe('Department Form', () => {
  let newDept, existingDept;

  beforeEach(() => {
    jest.useFakeTimers();
    newDept = 'New Dept Test';

    existingDept = {
      "id": 10,
      "isActive": "true",
      "name": "Test 1",
      "dateCreated": "2022-05-18T19:35:54.731Z",
      "dateUpdated": "2022-05-18T19:42:46.358Z"
    }
  });

  test('should display input field', () => { 
    render(<DepartmentForm />);
    const input = screen.getByRole('textbox', {  name: /department name/i})

    expect(input).toBeVisible();
   });


   test('should have save button', () => { 
     render(<DepartmentForm />);
     const saveButton = screen.getByRole('button', {  name: /save/i});

     expect(saveButton).toBeVisible();
    });


    test('should be able to save a new dept', async () => { 
      render(<DepartmentForm />);
      const input = screen.getByRole('textbox', {  name: /department name/i});
      const saveButton = screen.getByRole('button', {  name: /save/i});

      await act(async () => {
        fireEvent.change(input, {target: {value: 'test'}});
        fireEvent.click(saveButton);
        expect(input).toHaveTextContent('test')
      })


      // const successToast = screen.getByText(/department saved/i)
      // expect(successToast).toBeVisible();

     })
})