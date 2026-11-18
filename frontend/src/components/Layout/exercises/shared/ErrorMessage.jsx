export default function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-message bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded-r-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <span className="error-icon text-xl">⚠️</span>
                <div>
                    <p className="font-bold text-red-700">An error occurred</p>
                    <p className="text-sm text-red-600">{message}</p>
                </div>
            </div>
            {onRetry && (
                <button 
                    onClick={onRetry}
                    className="ml-4 px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}