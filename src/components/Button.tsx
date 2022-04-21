import { ReactNode } from 'react'

interface ButtonProps {
	children: ReactNode,
	onClick: () => void
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => (
	<button className="button" onClick={onClick} {...props}>
		{children}
	</button>
)