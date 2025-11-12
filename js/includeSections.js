async function loadIncludes(root = document) {
    const includeElements = root.querySelectorAll('[data-include]');
    await Promise.all(
        Array.from(includeElements).map(async (element) => {
            const file = element.getAttribute('data-include');
            if (!file) {
                return;
            }

            try {
                const response = await fetch(file);
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }
                const html = await response.text();
                element.innerHTML = html;
                element.removeAttribute('data-include');
                await loadIncludes(element);
            } catch (error) {
                console.error(error);
                element.innerHTML = `<div class="text-red-500">Unable to load ${file}</div>`;
            }
        })
    );
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadIncludes();
    document.dispatchEvent(new Event('sectionsLoaded'));
});
