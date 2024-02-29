import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

/*eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
    // 1. Load the authenticated user
    const { isAuthenticated, isLoading } = useUser();
    const navigate = useNavigate();

    // 2. If there is NO authenticated user, redirect to the /login

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate]);

    // 3. While loading, show a spinner
    if (isLoading)
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );

    // 4. IF there IS a user, go to dashboard

    return children;
}

export default ProtectedRoute;