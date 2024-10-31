import { useEffect } from "react";

export const LaunchAnimationTimer = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => 
{
    const launchAnimationTimer = 8200; // 2 second timer
    useEffect(() => 
    {
        setLoading(true);

        const timer = setTimeout(() => 
        {
            setLoading(false);
        }, launchAnimationTimer);

        return () => clearTimeout(timer);
    }, []);
}