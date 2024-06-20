import styles from "./DefaultComponent.module.scss";

/**
 * This component provides a simple default component to be loaded when components
 * that are suseptible to errors fail to render due to an error.
 * 
 * @param error This is the error object as passed in by the ErrorBoundary component. 
 * 
 * @param resetErrorBoundary This function is passed in by the ErrorBoundary component
 * but is not used.
 */
function DefaultComponent({error, resetErrorBoundary}){

    return (
        <div className={styles.errorContainer}>
            <h1>Oops... Something went wrong while rendering this component</h1>
            <p><strong>Error Details: </strong>{error.message}</p>
        </div>
    );
}

export default DefaultComponent;