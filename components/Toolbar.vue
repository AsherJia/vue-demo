<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img class="logoImg" width="30" height="30"></i>
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions';
import { activeNote } from '../vuex/getters';

export default {
  vuex: {
    getters: {
      activeNote
    },
    actions: {
      addNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>

<style lang="sass" scoped>
    #toolbar{
        float: left;
        width: 80px;
        height: 100%;
        background-color: #30414D;
        color: #767676;
        padding: 35px 25px 25px 25px;

        .starred {
            color: #F7AE4F;
        }

        i{
            font-size: 30px;
            margin-bottom: 35px;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.5s ease;
            &:hover{
                opacity: 1;
            }
        }

        .logoImg {
            background-image: url('../assets/logo.png');
            background-size: contain;
        }
    }
</style>
