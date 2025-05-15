import { useState, useEffect } from "react";

const VisitorCounter = () => {
	const [visitorCount, setVisitorCount] = useState<number | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// For local development only
	const isDevelopment = window.location.hostname === "localhost";

	useEffect(() => {
		const fetchVisitorCount = async () => {
			try {
				setLoading(true);

				// Use a mock value for local development
				if (isDevelopment) {
					// Simulate API delay
					await new Promise((resolve) => setTimeout(resolve, 800));
					setVisitorCount(42); // Mock value
					setError(null);
					setLoading(false);
					return;
				}

				const response = await fetch(
					"https://fgwvhyzjm6.execute-api.us-west-2.amazonaws.com/prod/visitors"
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setVisitorCount(data.visitorCount);
				setError(null);
			} catch (err) {
				console.error("Error fetching visitor count:", err);
				setError("Failed to load visitor count");
			} finally {
				setLoading(false);
			}
		};

		fetchVisitorCount();
	}, [isDevelopment]);

	return (
		<div className="bg-gray-100 rounded-lg p-4 shadow-md text-center">
			<h3 className="text-xl font-semibold text-gray-800 mb-2">
				Visitor Counter
			</h3>
			{loading ? (
				<div className="flex justify-center items-center h-10">
					<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
				</div>
			) : error ? (
				<p className="text-red-500">{error}</p>
			) : (
				<div>
					<p className="text-3xl font-bold text-brand-orange">{visitorCount}</p>
					<p className="text-sm text-gray-600">unique visitors</p>
					{isDevelopment && (
						<p className="text-xs text-gray-500 mt-1">(Development mode)</p>
					)}
				</div>
			)}
		</div>
	);
};

export default VisitorCounter;
