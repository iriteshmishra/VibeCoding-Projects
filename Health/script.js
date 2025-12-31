function showPage(pageName) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.style.display = 'none');
            
            document.getElementById(pageName + '-page').style.display = 'block';
            
            const links = document.querySelectorAll('nav a');
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            window.scrollTo(0, 0);
        }