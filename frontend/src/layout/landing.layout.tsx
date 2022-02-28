import React, {FC} from 'react';
import useSWR from 'swr';

interface LayoutProps {
    children?: any;
}

const LandingLayout: FC<LayoutProps> = ({children}) => {
    const { data, error } = useSWR('/api/navigation', ()=>{

    })

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};



export default LandingLayout;