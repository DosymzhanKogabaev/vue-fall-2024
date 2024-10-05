<script>
import avatarImage from '../assets/avatar.png';
export default {
    data() {
        return {
            persons: [
                // ADVENTURE
                { id: 1, PersonName: 'Alice', Avatar: avatarImage, PubDate: '2024-09-13', Rating: 5, Commentary: 'Absolutely thrilling experience!', Topic: 'ADVENTURE' },
                { id: 2, PersonName: 'Bob', Avatar: avatarImage, PubDate: '2024-09-12', Rating: 4, Commentary: 'Loved the adventure, very exciting.', Topic: 'ADVENTURE' },
                { id: 3, PersonName: 'Charlie', Avatar: avatarImage, PubDate: '2024-09-11', Rating: 3, Commentary: 'It was fun, but could be more challenging.', Topic: 'ADVENTURE' },
                { id: 4, PersonName: 'Diana', Avatar: avatarImage, PubDate: '2024-09-10', Rating: 5, Commentary: 'One of the best adventures I\'ve had!', Topic: 'ADVENTURE' },
                { id: 5, PersonName: 'Edward', Avatar: avatarImage, PubDate: '2024-09-09', Rating: 2, Commentary: 'Not as adventurous as I expected.', Topic: 'ADVENTURE' },
                { id: 6, PersonName: 'Fiona', Avatar: avatarImage, PubDate: '2024-09-08', Rating: 4, Commentary: 'Great experience overall.', Topic: 'ADVENTURE' },
                { id: 7, PersonName: 'George', Avatar: avatarImage, PubDate: '2024-09-07', Rating: 3, Commentary: 'It was decent, but some parts were dull.', Topic: 'ADVENTURE' },
                { id: 8, PersonName: 'Hannah', Avatar: avatarImage, PubDate: '2024-09-06', Rating: 5, Commentary: 'An unforgettable adventure!', Topic: 'ADVENTURE' },
                { id: 9, PersonName: 'Ivan', Avatar: avatarImage, PubDate: '2024-09-05', Rating: 4, Commentary: 'Had a lot of fun, would recommend.', Topic: 'ADVENTURE' },
                { id: 10, PersonName: 'Julia', Avatar: avatarImage, PubDate: '2024-09-04', Rating: 1, Commentary: 'Not worth the time or money.', Topic: 'ADVENTURE' },

                // NATURE
                { id: 11, PersonName: 'Kevin', Avatar: avatarImage, PubDate: '2024-09-13', Rating: 5, Commentary: 'Absolutely stunning views!', Topic: 'NATURE' },
                { id: 12, PersonName: 'Laura', Avatar: avatarImage, PubDate: '2024-09-12', Rating: 4, Commentary: 'Beautiful scenery, very relaxing.', Topic: 'NATURE' },
                { id: 13, PersonName: 'Michael', Avatar: avatarImage, PubDate: '2024-09-11', Rating: 3, Commentary: 'Nice, but not extraordinary.', Topic: 'NATURE' },
                { id: 14, PersonName: 'Nancy', Avatar: avatarImage, PubDate: '2024-09-10', Rating: 5, Commentary: 'Felt like I was in paradise!', Topic: 'NATURE' },
                { id: 15, PersonName: 'Oliver', Avatar: avatarImage, PubDate: '2024-09-09', Rating: 2, Commentary: 'Too crowded, couldn\'t enjoy the nature.', Topic: 'NATURE' },
                { id: 16, PersonName: 'Paul', Avatar: avatarImage, PubDate: '2024-09-08', Rating: 4, Commentary: 'Peaceful and refreshing experience.', Topic: 'NATURE' },
                { id: 17, PersonName: 'Quincy', Avatar: avatarImage, PubDate: '2024-09-07', Rating: 3, Commentary: 'Good but not as I expected.', Topic: 'NATURE' },
                { id: 18, PersonName: 'Rachel', Avatar: avatarImage, PubDate: '2024-09-06', Rating: 5, Commentary: 'Truly a breath of fresh air!', Topic: 'NATURE' },
                { id: 19, PersonName: 'Sam', Avatar: avatarImage, PubDate: '2024-09-05', Rating: 4, Commentary: 'Beautiful and well-maintained.', Topic: 'NATURE' },
                { id: 20, PersonName: 'Tina', Avatar: avatarImage, PubDate: '2024-09-04', Rating: 1, Commentary: 'Not worth visiting, very disappointing.', Topic: 'NATURE' },

                // FASHION
                { id: 21, PersonName: 'Uma', Avatar: avatarImage, PubDate: '2024-09-13', Rating: 5, Commentary: 'The best fashion show I\'ve seen!', Topic: 'FASHION' },
                { id: 22, PersonName: 'Victor', Avatar: avatarImage, PubDate: '2024-09-12', Rating: 4, Commentary: 'Great designs, very trendy.', Topic: 'FASHION' },
                { id: 23, PersonName: 'Wendy', Avatar: avatarImage, PubDate: '2024-09-11', Rating: 3, Commentary: 'Some outfits were amazing, others not so much.', Topic: 'FASHION' },
                { id: 24, PersonName: 'Xavier', Avatar: avatarImage, PubDate: '2024-09-10', Rating: 5, Commentary: 'Loved every piece showcased!', Topic: 'FASHION' },
                { id: 25, PersonName: 'Yara', Avatar: avatarImage, PubDate: '2024-09-09', Rating: 2, Commentary: 'Not my style, quite dull.', Topic: 'FASHION' },
                { id: 26, PersonName: 'Zane', Avatar: avatarImage, PubDate: '2024-09-08', Rating: 4, Commentary: 'Fashionable and very creative.', Topic: 'FASHION' },
                { id: 27, PersonName: 'Aiden', Avatar: avatarImage, PubDate: '2024-09-07', Rating: 3, Commentary: 'It was alright, nothing extraordinary.', Topic: 'FASHION' },
                { id: 28, PersonName: 'Bella', Avatar: avatarImage, PubDate: '2024-09-06', Rating: 5, Commentary: 'Incredible fashion statements!', Topic: 'FASHION' },
                { id: 29, PersonName: 'Connor', Avatar: avatarImage, PubDate: '2024-09-05', Rating: 4, Commentary: 'Good show, very inspiring.', Topic: 'FASHION' },
                { id: 30, PersonName: 'Daisy', Avatar: avatarImage, PubDate: '2024-09-04', Rating: 1, Commentary: 'Boring and uninspired.', Topic: 'FASHION' },
            ]
        };
    }
};
</script>