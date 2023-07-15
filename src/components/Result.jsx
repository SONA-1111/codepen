import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
    margin: 0 6px;
`

const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, [html, css, js])

    return (
        <Container style={html || css || js ? null : {background: '#afb3c2' }}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Container>
    )
}

export default Result;