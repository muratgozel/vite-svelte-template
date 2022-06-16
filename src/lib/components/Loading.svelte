<div class="body">
  <div class="content-loading">
    <div class="texts">
      <div class="text"></div>
      <div class="text"></div>
      <div class="text"></div>
      <div class="text"></div>
    </div>
  </div>
</div>

<style>
  @keyframes contentLoadingAnim {
    0% {
      filter: opacity(1);
    }
    50% {
      filter: opacity(0.5);
    }
    100% {
      filter: opacity(1);
    }
  }

  .body {
    width: 1024px;
    margin: 0 auto;
  }

  .content-loading {
    display: flex;
    padding: 0px;
    animation: contentLoadingAnim 1.2s ease-in-out infinite;
  }
  .content-loading .image {
    width: 75px;
    height: 75px;
    flex: 75px 0 0;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-right: 8px;
  }
  .content-loading .texts {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .content-loading .text {
    background-color: #f5f5f5;
    width: 100%;
    height: 16px;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  .content-loading .text:first-child {
    width: 75%;
    height: 24px;
  }
</style>