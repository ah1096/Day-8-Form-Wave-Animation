const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>
    {
        label.innerHTML = label.innerText 
            .split('')
                // split each letter into array
            .map((letter, idx) => `<span 
            style="transition-delay:${idx * 50}ms">${letter}</span>`)
                // create array of letter w/ span
                // increase idx multiplier # for slower effect
            .join('')
                // turn array back into string
    })