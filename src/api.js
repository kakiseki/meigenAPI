export async function fetchWords() {
    const response = await fetch(`https://meigen.doodlenote.net/api/json.php`);
    const data = await response.json();
    return data.meigen;
}