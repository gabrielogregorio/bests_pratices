// references
// * https://giovanisleite.dev/erros-comuns-com-react-testing-library
// * https://testing-library.com/docs/queries/about/#priority
// * https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
// eslint
// use plugins in your tests
// eslint-plugin-testing-library
// eslint-plugin-jest-dom



// do not use wrapper, wrapper reference enzime
// render function return ultitilities, do not wrapper
// bad
const wrapper = render(<Component prop={1}/>)
wrapper.rerender(<Component prop={2}/>)

// good
const { rerender } = render(<Component prop={1}/>)
rerender(<Component prop={2}/>)



// use screen
// use screen.debug for debuging
import {render, screen} from '@testing-library/react'

render(<Component />)
const message = screen.getByRole('alert')
screen.debug()



// use jest dom ressorces => @testing-library/jest-dom
const button = screen.getByRole('button', {name: 'Increment'})
// bad code
expect(button.disabled).toBe(false)

// good code
expect(button).toBeDisabled()



// warning on use act, render e firevent using act
// bad code
act(() => {
  render(<Component />)
})
act(() => {
  fireEvent.keyDown(input, {key: 'ArrowDown'})
})



// avoid using testId query
// bad code
render(<><label>Username</label><input data-testid="username" /> </>)
screen.getByTestId('username')

// good code
render(<><label for="username">Username</label><input id="username" type="text" /> </>)
screen.getByRole('textbox', {name: /username/i})


// not use container for use queries, use screen!
// bad code
const { container } = render(<Button />)
const button = container.querySelector('.btn-primary')
expect(button).toHaveTextContent('Decrementar')

// good code
render(<Button />)
screen.getByRole('button', {name: /Decrementar/i})


// avoid use getByText
// bad code
screen.getByText('MyTitle')

// good code
screen.getByRole('heading', {name: 'Title'})


// avoid use fireevent
// bad code
fireEvent.change(input, {target: {value: 'hello world'}})

// good code
import userEvent from '@testing-library/user-event'
userEvent.type(input, 'hello world')
user.click(screen.getByText(/submit/i))

// use query only for testing non-existence
// bad code
expect(screen.queryByRole('button')).toTheInTheDocument()

// good code
expect(screen.queryByRole('button')).not.toTheInTheDocument()
expect(screen.getByRole('button')).toTheInTheDocument()



// do not use waitFor, use find, find return a promise
// use waitFor only one assertion, but avoid use
// bad code
const submitButton = await waitFor(() =>
  screen.getByRole('button', {name: /submit/i}),
)

// good code
const submitButton = await screen.findByRole('button', {name: /submit/i})


// order of priority tags, avoid use testid
1 - getByRole
2 - getByLabelText
3 - getByPlaceholderText
4 - getByText
5 - getByDisplayValue
6 - getByAltText
7 - getByTitle
8 - getByTestId


// act erros, wait completed finish actions in page
