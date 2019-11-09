@extends('layouts.app')

@section('content')
<div class="container">
    <div id="background" class="row justify-content-center">
        <div id="sphereCard" class="col-md-12">
                <br>
                <br>
                <p class="text-center">Me gustaría</p>
            <div class="d-flex justify-content-center">
                <activities-component></activities-component><actions-component></actions-component>
            </div>
                <p class="text-center">en</p>
                <cities-component></cities-component>
            <div class="d-flex justify-content-center">
                <button-search-component></button-search-component>
            </div>
        </div>
    </div>
</div>
@endsection