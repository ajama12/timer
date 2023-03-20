const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const num = Number(args[i]);
  if (!isNaN(num) && num >= 0) {
    setTimeout(() => {
      console.log(`Timer ${i + 1} beeped after ${num} seconds.`);
      process.stdout.write('\x07');
    }, num * 1000);
  }
}
