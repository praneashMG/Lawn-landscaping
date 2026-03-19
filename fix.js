const fs = require('fs');

const files = [
    'index.html',
    'home2.html',
    'about.html',
    'services.html',
    'gallery.html',
    'projects.html',
    'pricing.html',
    'contact.html'
];

const configBlock = `<script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        background: 'var(--color-background)',
                        'primary-text': 'var(--color-primary-text)',
                        'secondary-text': 'var(--color-secondary-text)',
                        accent: 'var(--color-accent)',
                        'accent-light': 'var(--color-accent-light)',
                        border: 'var(--color-border)',
                        hover: 'var(--color-hover)'
                    }
                }
            }
        }
    </script>`;

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        // Only replace if the config block is not already present
        if (!content.includes('tailwind.config = {') && content.includes('<script src="https://cdn.tailwindcss.com"></script>')) {
            content = content.replace('<script src="https://cdn.tailwindcss.com"></script>', configBlock);
            fs.writeFileSync(f, content);
            console.log('Updated ' + f);
        } else {
            console.log('Skipped ' + f);
        }
    }
});
