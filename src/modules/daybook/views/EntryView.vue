<template>
    <div class="entry-title justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3 ">Julio</span>
            <span class="mx-2 fs-5 fw-ligth">2021, jueves</span>
        </div>

        <div > 
            <button class='btn btn-danger mx-2'>
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class='btn btn-primary mx-2'>
                Subif foto
                <i class="fa fa-upload"></i>
            </button>
                
        </div>
    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea  placeholder="que sucedio hoy?"/>
            
    </div>

    <float-action-button icon='fa-save'/>

    <img src="https://www.caracteristicas.co/wp-content/uploads/2018/08/pulpo-1-e1578322412373.jpg" 
    alt='pulp'
    class="img-thumbnail" />
</template>

<script>
import FloatActionButton from '../components/FloatActionButton.vue'

export default {
    components:{
        FloatActionButton
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size:20px;
    border:none;
    height:100%;
    &:focus{
        outline: none;
    }
}

img{
    width:200px;
    position:fixed;
    bottom: 150px;
    right:20px;
    box-shadow:0px 5px 10px rgba($color:#000, $alpha:0.2);
}
</style>