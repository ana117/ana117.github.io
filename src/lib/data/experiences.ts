import type { Experience } from "$lib/types";

const experiences: Experience[] = [
    {
        title: 'Backend Engineer',
        company: 'GoApp',
        location: 'Indonesia',
        date: 'October 2024 - Present',
        type: 'Full-time',
    },
    {
        title: 'Full Stack Web Developer',
        company: 'FutureView.app',
        url: 'https://futureview.app',
        location: 'Remote',
        date: 'January 2024 - June 2024',
        type: 'Freelance',
        details: [
            "Designed and developed a Django-based website, styled with TailwindCSS",
            "Executed a data migration of 300 users from legacy systems by replicating the original hashing method",
            "Developed new features resulting in 75% increase in total users on the first month",
            "Integrated PayPal to automate the payment process, reducing the time needed to manually process payments",
            "Created automated scripts to update and populate the database from spreadsheet data, reducing the time needed to make frequent changes based on user feedback"
        ],
    },
];

export default experiences;