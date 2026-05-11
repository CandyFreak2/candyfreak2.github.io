function GetDownloadCount(target, projectID) {
    const headers = {
        'Accept': 'application/json',
        'x-api-key': process.env.CURSEFORGE_API
    };

    try {
        const response = fetch(url, headers);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = response.json();
        const downloads = data.data.downloadCount.toLocaleString();
        target.textContent = "Downloads: " + downloads;
    } catch (error) {
        console.error("Failed to fetch CurseForge data:", error);
        target.textContent = "Error loading count";
    }
}