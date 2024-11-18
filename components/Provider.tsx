'use client'

import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

type Props = {
    children: React.ReactNode
}

const Provider = ({ children }: Props) => {
    return (
        <AnimatePresence>
            {/* <ThemeProvider enableSystem={true} attribute="class"> */}
            {children}
            {/* </ThemeProvider> */}
        </AnimatePresence>
    )
}

export default Provider