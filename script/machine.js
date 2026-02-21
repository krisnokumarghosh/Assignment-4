
function showOnly (id){
    const allSection = document.getElementById('all');
    const interSection = document.getElementById('interview');
    const rejecSection = document.getElementById('rejected');


    allSection.classList.add('hidden');
    interSection.classList.add('hidden');
    rejecSection.classList.add('hidden');


    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}