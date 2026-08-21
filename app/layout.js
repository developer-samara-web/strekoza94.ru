import "./globals.css";

import { ModalProvider } from "@/components/Modal/ModalProvider";

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<ModalProvider>
					{children}
				</ModalProvider>
			</body>
		</html>
	);
}

export default RootLayout;