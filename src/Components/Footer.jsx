import { Link, useNavigate } from "react-router"
import { useEffect } from "react"

export default function Footer({prevlink, nextlink}) {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate(path);
            });
        } else {
            navigate(path);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log('Key pressed:', e.key);
            if (e.key === 'ArrowLeft') {
                handleNavigation(prevlink);
            } else if (e.key === 'ArrowRight') {
                handleNavigation(nextlink);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevlink, nextlink]);

    return (
        <footer>
            <Link to={prevlink}>Forrige</Link>
            <Link to={nextlink}>Næste</Link>
        </footer>
    )
}