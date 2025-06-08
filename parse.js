const fs = require('fs');

const accounts = fs.readFileSync('accounts.txt', 'utf8').split('\n').filter(line => line.trim() !== '');
const proxies = fs.readFileSync('proxys.txt', 'utf8').split('\n').filter(line => line.trim() !== '');

if (accounts.length !== proxies.length) {
    console.warn('Внимание: количество аккаунтов и прокси не совпадает!');
}

const result = [];
const minLength = Math.min(accounts.length, proxies.length);

for (let i = 0; i < minLength; i++) {
    result.push(`${accounts[i].trim()}|${proxies[i].trim()}`);
}

fs.writeFileSync('combined.txt', result.join('\n'));

console.log(`Готово! Объединено ${result.length} записей. Результат сохранен в combined.txt`);