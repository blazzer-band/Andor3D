# Warriors vs Creeps [Mission: Bomb Keepers]
# Игра по типу "Mechs vs Minions (LoL)"

### [Играть](https://blazzer-band.github.io/Warriors-vs-Creeps/index.html)
### Подробное описание игры доступно на [Wiki](https://github.com/blazzer-band/Warriors-vs-Creeps/wiki)

# Идея
Вам предстоит играть за одного из четырёх хранителей бомбы определённых стихий (огонь, металл, компьютеры, электричество). Ваша задача - доставить бомбу до пункта ремонта, не дав крипам (противникам) уничтожить её. 

# Содержание игры
В комнате могут находиться 1-4 игроков. 
Имеется бомба, которая является целью для крипов, а для воинов - предмет, который нужно защитить и доставить до цели. 
Также есть колода для карт повреждения, уникальных карт и карт командной игры каждой стихии. 
Сама игра имеет карту 12 х 6. 
На карте расположенны ключевые точки:
0 - обычная ячейка поля;
1 - ячейка базы;
2 - руные клетки;
3 - цель (пункт ремонта).
Каждый игрок имеет поле для карт с шестью ячейками.
Имеется трекер бомбы, на которой отслеживается жизнь бомбы.
Также есть трекер убийств крипов, который позволяет активировать уникальные карты.

# Динамика игры
У игры есть две фазы: воина(игрока) и крипа(противника). 

Сначала идёт фаза воина:
1) Выбор карт. 
При первом раунде раскладываются 10 карт на выбор (в последующих раундах - по 5). Идёт время на выбор карт (каждый игрок выбирает по очереди по одной карте, собирая за эту фазу 1-2 карты на руки (если первый раунд, то 2, остальные - по 1), иначе если игрок не успевает вовремя собрать требуемое количество, ему выдаются карты случайным образом. 
2) Программирование карт.
Игрок программирует свои карты (расположение и порядок использования) либо утилизирует (если утилизирует карту огонь/металл, то утилизирует одно повреждение с повреждённого слота | если утилизирует карту электричество/компьютеры, то происходит перепрогроммирование поля для карты -> обмен двух стэков неповреждённых слотов)
3) Действие.
Игрок выполняет ход, следуя действиям, описанными на картах в его поле (по порядку их следования).

Потом идёт фаза крипа:
1) Крипы ходит в сторону бомбы.
2) Крипы размножаются, появляясь на свободных рунах.
3) Крипы делают удар по бомбе, воину, если у них есть возможность.

# Приятной игры!
